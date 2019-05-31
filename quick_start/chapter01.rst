=======================
Chapter 1: Installation
=======================

we are going to install:

* node version manager
* nodejs


Install NVM
===========

https://github.com/creationix/nvm

To install `nvm`:

using cURL::

	$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

or Wget::

	$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

The script clones the nvm repository to ~/.nvm and adds the source line to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc)::

	$ export NVM_DIR="$HOME/.nvm"
	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm


install node
============
::

	$ nvm install node
	$ npm install -g @angular/cli