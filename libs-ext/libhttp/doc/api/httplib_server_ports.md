# LibHTTP API Reference

### `struct httplib_server_ports;`

### Fields

| Field | Type | Description |
| :--- | :--- | :--- |
|**`protocol`**|`int`|The protocol mask where `IPv4` is **1**, `IPv6` is **2** and both `IPv4` and `IPv6` is **3**|
|**`port`**|`int`|The port number on which the service listens|
|**`is_ssl`**|`int`|**0** for `HTTP` communication, **1** for `HTTPS`|
|**`is_redirect`**|`int`|**1** if all requests are redirected, otherwise **0**|
|**`_reserved1`**|`int`|Reserved for internal use|
|**`_reserved2`**|`int`|Reserved for internal use|
|**`_reserved3`**|`int`|Reserved for internal use|
|**`_reserved4`**|`int`|Reserved for internal use|

### Description

A call to the function [`httplib_get_server_ports()`](httplib_get_server_ports.md) returns a list of structures with information about each running LibHTTP service. These structures are of type `struct httplib_server_ports` and contain the base information of each service.

### See Also

* [`httplib_get_server_ports();`](httplib_get_server_ports.md)
