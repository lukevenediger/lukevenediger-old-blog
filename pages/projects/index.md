<!-- 
  title = My Projects
  template = page 
  menu = my projects
-->
## [statsd.net](https://github.com/lukevenediger/statsd.net/)
statsd.net is a metrics collection service that collects data, aggregates it and forwards the summarized information to a dashboard system.
It's built to run in Windows-centric environments, installs as a service, and is designed to handle large volumes of data.

## [statsd csharp client](https://github.com/lukevenediger/statsd-csharp-client/)
statsd-csharp-client is used in .net applications to send activity measurements to a stats collector like [statsd.net](pages/projects/statsd.net/index.md)
and works on .Net 3.5, 4.0 and 4.5.
Install via nuget by searching for the [Simple Statsd client for .Net 3.5, 4.0 and 4.5](https://www.nuget.org/packages/StatsdCsharpClient/1.1.0.0)
The github project page also includes a quickstart guide in the readme.

## [dingu IOC framework for JavaScript](https://github.com/lukevenediger/dingu/)
An angularjs-style dependency injection framework for JavaScript, dingu makes it easy to define modules, singletons and constants that are assembled at runtime when needed.
Available on Nuget and Bower. See the project readme for usage and download instructions.

## [champ static site generator](https://github.com/lukevenediger/champ/)
champ is a sensible static site generator for Windows that tries to stay out of your way and make creating
content really simple. It has the following features:

* Uses [razor](http://en.wikipedia.org/wiki/ASP.NET_Razor_view_engine) for page templates
* Uses [markdown](http://en.wikipedia.org/wiki/Markdown) for content pages
* Supports partial views in templates
* Mirrors the folder structure used in the content pages for the site structure
* Supports the use of a static folder

## [champ bootstrap](https://github.com/lukevenediger/champ-bootstrap/)
A sample site to help champ users get started with a static site.

## [statsdcmd](https://github.com/lukevenediger/statsdcmd/)
A lightweight command line client for statsd.net and statsd. Useful for, say, logging stats on batch jobs,
integrating with scripted workflows like source code builds and integrating with Powershell. Works with .Net 4.5
and upwards.