# Front End Documentation Example
This is the example repository for the talk "Getting Started with Sassdoc and Styledown" for the PDX Sass meetup.

http://www.meetup.com/pdxSass/events/219617864/

# Instructions
To get the build scripts running, you'll need to do the following:

1. [Install NodeJS](https://nodejs.org/)
2. Run a few commands in the root to install Gulp and Grunt globally:

    ```
    $ [sudo] npm install -g gulp
    $ [sudo] npm install -g grunt
    ```
3. Install the Sassdoc theme dependencies:

    ```
    $ cd sassdoc-theme-example
    $ npm install
    ```
4. Execute either the Gulp or Grunt build:

    ```
    $ cd ../
    $ gulp
    ```

    ```
    $ cd ../
    $ grunt
    ```
    
# Editing the Sassdoc Theme
To edit the Sassdoc theme, you'll need to:

1. Install some more packages globally:

    ```
    $ [sudo] npm install -g jshint babel@4.7.16
    $ [sudo] gem install sass
    ```
    
    **NOTE**: As of this writing, the Sassdoc default theme, from which we forked our example, does not work with Babel 5.0.0 or later.  As such we specify Babel 4.7.16 for installation.
2. In the `sassdoc-theme-example` directory, edit the markup (`views`), CSS (`scss`), and assets (`assets`) as desired.
3. From the `sassdoc-theme-example` directory execute:

    ```
    make
    ```
    
    This compiles the Sassdoc theme.
4. Execute either the Gulp or Grunt build to build the new documentation with the updated theme.
