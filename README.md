# Dotfiles

## Getting Started

1. Clone repo in home directory
2. `cd dotfiles`
3. Run dry run install script: `script/install --dry-run` to check expected output
4. Look ok? `script/install`

## Symlinks Notes

* **Purpose:** To create viewable dotfiles available on GitHub

* `/dotfiles/src/zsh` (directory) —> hello.js, terminal-greeting.sh (shell configuration files)

* `/dotfiles/src/zshrc` (file) —> this is the real zshrc. Its symlink is in the home directory ~/ as the original .zshrc (this is a symlink to what’s in the dotfile/src/zshrc)

* `/dotfiles/script/install` —> ruby script to create symlinks
