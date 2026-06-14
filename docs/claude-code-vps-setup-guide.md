# Claude Code VPS Setup Guide

> Give Claude Code secure, limited access to a production VPS.

## Prerequisites

- VPS with SSH access (you can `ssh root@<vps-ip>` manually)
- Claude Code installed
- Project repo cloned locally

---

## Step 1: Generate SSH Key (Terminal)

```bash
ssh-keygen -t ed25519 -f ~/.ssh/claude-vps -C "claude-code"
```

Press Enter twice (no passphrase).

## Step 2: Copy Key to VPS (Terminal)

```bash
ssh-copy-id -i ~/.ssh/claude-vps.pub root@<vps-ip>
```

Replace `root` with your VPS user if different. Enter password when prompted.

## Step 3: Test Connection (Terminal)

```bash
ssh -i ~/.ssh/claude-vps root@<vps-ip> "echo 'SSH OK'"
```

Expected: `SSH OK`

## Step 4: Start Claude Code

```bash
cd /path/to/project
claude
```

## Step 5: Paste Setup Prompt

Customize this prompt for your project — replace the deploy commands with your own:

```
I need to set up safe VPS deployment access for this project. Three things:

1. Update .claude/settings.local.json — add SSH and SCP permission patterns so I can run deployment commands remotely. Keep existing permissions.

2. Create a deploy.sh script that does the full safe deploy flow: [backup your data] → git push → SSH to VPS to pull and restart → verify the service came back up. It should accept VPS IP as an argument and exit on any failure. Add it to the permissions too.

3. Add a "VPS Deployment Rules" section to CLAUDE.md covering: always backup before any destructive change, never edit .env on VPS directly, never run destructive operations without asking me first, always verify service is up after deploy.

Run tests, commit, push when done.
```

Claude will create:
- `.claude/settings.local.json` — permission allowlist (gitignored, local only)
- `deploy.sh` — safe deploy script
- Updated `CLAUDE.md` — deployment rules

## Step 6: Provide VPS IP

```
The VPS IP is <vps-ip>. Run a read-only diagnostic — check if the service is running and tail the logs.
```

Claude will run read-only commands only. It will NOT edit files, restart services, or modify anything.

## Step 7: Deploy

```
Deploy to VPS: run deploy.sh with my VPS IP <vps-ip>
```

What `deploy.sh` does in order:
1. Backup data
2. `git push` — push code to GitHub
3. SSH → `git pull` → restart service on VPS
4. Verify service came back up

Exits immediately if any step fails.

---

## Safety Rules

| Rule | Why |
|------|-----|
| Backup before any destructive change | Recovery point if something breaks |
| Never edit `.env` on VPS | Prevents secrets from leaking into git history |
| Never run destructive operations without asking | Always confirm with human first |
| Always verify service after deploy | Catches failures before user discovers them manually |
| No sudo, no rm, no chmod | Blocks destructive commands via permission config |

## Notes

- `.claude/settings.local.json` is gitignored — stays local, never committed
- Claude never reads `.env` — you provide VPS IP manually
- Claude asks before restarting services — you confirm

## Revoke Access

```bash
ssh root@<vps-ip> "sed -i '/claude-code/d' ~/.ssh/authorized_keys"
```

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Permission denied (publickey)` | Key not copied — redo Step 2 |
| Claude can't SSH but you can | Check `.claude/settings.local.json` has `Bash(ssh *)` |
| `deploy.sh` fails | Check your backup/restart commands in the script are correct for your stack |
| Service down after deploy | SSH in and check your app logs |
