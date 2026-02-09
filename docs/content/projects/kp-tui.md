# KP - A KeePassXC TUI

A lightning-fast, TUI wrapper for KeePassXC. Fuzzy-find your passwords, copy credentials with a single keystroke, and stay in the flow—all without leaving your terminal.

## Features
* ⚡ **Fast**: Instant fuzzy search using `fzf`.
* 🔒 **Secure**: Passwords are kept in memory only for the session and cleared on exit.
* 📋 **Cross-Platform**: Works on Linux and macOS.
* ⌨️ **Lazy-Style**: Bindings for Ctrl+P (Password) and Ctrl+U (Username) without opening menus.

## Requirements
* `keepassxc` (CLI tools)
* `fzf`
* A clipboard tool: `wl-copy` (Wayland), `xclip` (X11), or `pbcopy` (macOS)

## Installation
Download the script and place it in your path:
```bash
chmod +x ~/.local/bin/kp
```

### Configuration
Add your database path to your shell config (`.bashrc` or `.zshrc`):
```bash
export KEEPASS_DB="$HOME/Documents/database.kdbx"
```
(Alternatively, edit the `DEFAULT_DB` variable at the top of the script).

## Usage
Run it from anywhere:
```bash
kp
```

### Keybindings
| Key | Action |
| --- | --- |
| Type | Fuzzy search entries |
| **Ctrl + P** | Copy Password to clipboard |
| **Ctrl + U** | Copy Username to clipboard |
| **Enter** | Open Action Menu (TOTP, Info, etc.) |
| **Esc** | Quit |

## Troubleshooting
* **"Clipboard empty"**: Ensure you have `wl-copy` (Wayland) or `xclip` (X11) installed.
* **"Command not found"**: Ensure `~/.local/bin` is in your `$PATH`.