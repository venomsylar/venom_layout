# Neutron
## File Structure
### Main files and directories
#### PHP
* `header.php` - _include site header_
* `footer.php` - _include site footer_
* `function.php` - _template used by WordPress themes. It acts like a plugin and gets automatically loaded in both admin and front-end pages of the site._
* `index.php` - _main file, used for blog page_
* `single.php` - _file for post page_
* `page.php` - _template for default page_
* `front-page.php` - _for homepage (set front page in Settings/Reading)_
* `sidebar.php` - _file for include sidebar on the site_
* `tpl-blank.php` - _file for creating custom templates_
* `404.php` - _for 404 page_

#### Other Files
* `style.css` - _file, that controls the presentation (visual design and layout) of the website pages. Used only for display theme information_
* `screenshot.png` - _theme image_
* `package.json` - _file for: managing dependencies, scripts, that helps in generating builds, running tests and other stuff in regards to project_
* `webpack.config.js` - _is a place to put all of configuration, loaders, and other specific information relating to build. Used for Webpack_
* `postcss.config.js` - _is a tool for transforming styles with JS plugins._
* `.babelrc` - _Babel config file_

#### Directories
* **`template-parts`** - _directory, that contains files witch are included to main php files_
   * **`blog`** - _include files for blog page_
        * `loop.php` - _file, that contains loop with posts_
        * `post.php` - _file, that contains post information_
   * **`global`** - _directory, that contains shared files_
        * **`footer`** - _files, that are included in footer_
           * `copyright.php`
           * `google-rating.php`
           * `policy-block.php`
           * `scroll-to-top.php`
        * **`header`** - _files, that are included in header_
           * **`head`**
                * **`tag-manager`**
                    * `tag-manager-first-part.php`
                    * `tag-manager-second-part.php`
                * `google-analytics.php`
                * `google-site-verification.php`
                * `hotjar.php`
           * `main-menu.php`
        * **`shortcodes`**
            * `custom-pagination.php`
            * `google-rating.php`
* **`inc`**
    * **`classes`**
        * `ACFRelationshipTemplateFilter.php`
        * `CustomPostType.php`
        * `CustomTaxonomy.php`
        * `PostUrlShortcutRewriter.php`
        * `TaxUrlShortcutRewriter.php`
        * `WPStructuralElements.php`
    * **`plugins`**
        * `cyr-to-lat.php`
        * `duplicator.php`
        * `filter-by-template.php`
        * `lowercase-url.php`
        * `scroll-to-top.php`
    * `classes.php`
    * `configuration.php`
    * `custom-functions.php`
    * `enqueue.php`
    * `filters.php`
    * `plugins.php`
    * `registration.php`
    * `shortcodes.php`
* **`acf-json`**
* **`assets`**
    * **`development`**
        * **`images`**
        * **`js`**
        * **`styles`**
        * `main.js`
        
## Plugins

##### Advanced Custom Fields PRO
Advanced Custom Fields is a WordPress plugin which allows you to add extra content fields to your WordPress edit screens. These extra content fields are more commonly referred to as Custom Fields and can allow you to build website’s faster and educate your client’s quicker.
##### PR WP Encore
A plugin that integrates Webpack into Wordpress
##### Classic Editor
Enables the WordPress classic editor and the old-style Edit Post screen with TinyMCE, Meta Boxes, etc. Supports the older plugins that extend this screen.
##### TinyMCE Advanced
Enables advanced features and plugins in TinyMCE, the visual editor in WordPress.
##### Yoast SEO
Plugin for SEO
##### Google XML Sitemaps
This plugin improves SEO using sitemaps for best indexation by search engines like Google, Bing, Yahoo and others.
##### Redirection
Plugin that help manage all 301 redirects and monitor 404 errors
##### WPS Hide Login
Protect website by changing the login URL and preventing access to wp-login.php page and wp-admin directory while not logged-in
