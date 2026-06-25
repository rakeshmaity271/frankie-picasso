import paramiko
import sys

host = "194.163.151.182"
user = "root"
password = "rakeshmaity"
project_path = "/home/kodeclouds-frankie-picasso/htdocs/frankie-picasso.kodeclouds.com"

commands = [
    # Rename index.php so Nginx serves index.html instead
    f"mv {project_path}/index.php {project_path}/index.php.bak",
    f"echo '=== index.php renamed ==='",
    # Verify index.html is correct
    f"head -5 {project_path}/index.html",
    # Check assets are present
    f"ls -la {project_path}/assets/",
    # Reload Nginx to pick up changes
    "systemctl reload nginx",
    "echo '=== Nginx reloaded ==='",
    # Verify the site serves index.html now
    f"curl -s -o /dev/null -w '%{{http_code}}' http://127.0.0.1:8080/",
    f"echo ''",
    f"curl -s http://127.0.0.1:8080/ | head -3",
]

try:
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(host, port=22, username=user, password=password, timeout=15, allow_agent=False, look_for_keys=False)
    print("Connected!\n")

    for cmd in commands:
        print(f"$ {cmd}")
        stdin, stdout, stderr = client.exec_command(cmd)
        out = stdout.read().decode().strip()
        err = stderr.read().decode().strip()
        if out: print(out)
        if err: print(f"  (stderr: {err})")
        print()

    client.close()
    print("\nFix applied! The site should now serve the React app.")
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)
