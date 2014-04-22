
# Susy Helper

Just a simple structure/helper for debugging Susy2 grids

+ [Susy2 responsive grids](http://susy.oddbird.net), using Susy via Bower
+ Compass free
+ 4 cols mobile, 6 cols tablet and 12 cols desktop
+ Vertical Rhythm and Modular Scale (Golden ratio) using [Typesettings](http://typesettings.io/)
+ 6 px baseline overlay using [Baseholdit](http://basehold.it). Inspiration from [teehan+lax -> Designing Faster with a Baseline Grid](http://www.teehanlax.com/blog/designing-faster-with-a-baseline-grid/)
+ Simple typography using [Clear Sans](https://01.org/clear-sans) typography

### Requirements

+ [Susy 2](http://susydocs.oddbird.net/en/latest/changelog/)
+ [Sass 3.3](http://blog.sass-lang.com/posts/184094-sass-33-is-released)

### Install

+ Install Grunt `npm install -g grunt-cli`
+ Install Grunt plugins `npm install`
+ Run watcher to compile and live reload `grunt watch:dev`. Or use default Grunt task.

### Usage

Toggle overlay on/off by setting ` $griddebug: true;` in [base.scss](https://github.com/urre/Susyhelper/blob/gh-pages/scss/_grid.scss#L15)

### Demo

[Check out Susyhelper](http://urre.github.io/Susyhelper/)

![Susyhelper](https://dl.dropboxusercontent.com/u/1162759/susyhelper.gif)