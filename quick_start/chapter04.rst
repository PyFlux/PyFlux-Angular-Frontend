Deployment Apache
=================

apache config
-------------

`vim /etc/apache2/sites-available/pyflux_frontend.conf`::

    <VirtualHost *:80>
        ServerName pyflux.in
            #referring the user to the recipes application
            DocumentRoot /var/www/pyflux/frontend
            <Directory /var/www/pylux/frontend>
                    Options Indexes FollowSymLinks MultiViews
                    AllowOverride All
                    Order allow,deny
                    allow from all
                    # Uncomment this directive is you want to see apache2's
                    # default start page (in /apache2-default) when you go to /
                    #RedirectMatch ^/$ /apache2-default/
            </Directory>
            ErrorLog /var/www/pyflux/frontend/error.log
            CustomLog /var/www/pyflux/frontend/access.log combined
    </VirtualHost>

Enable the site::

    a2ensite  pyflux_frontend.conf

reloading pages, besides root
-----------------------------

https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2

Add a `.htaccess` file (in the same directory where the `index.html` resides) with the following contents::

    <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . index.html [L]
    </IfModule>

This piece of code makes use of the `mod_rewrite` module from Apache, so make sure you have this enabled::

    a2enmod rewrite

Restart the apache2 service after that::

    service apache2 restart
