<!--
title = Working with Metrics
template = page
-->
This guide is aimed at people who have metrics in their applications and want to get more value out of what
they're doing. I'm writing mostly from my own experience of operating a large-scale metrics service, both
from what I've seen people do and what I've done when instrumenting my own services.

Please feel free to submit a pull request with corrections and additional content.

```csharp
public class foo
{
  public string Bar {get; set;}
}

## Logging Metrics
* [Types of Metrics](page:types-of-metrics)
