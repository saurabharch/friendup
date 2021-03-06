# LibHTTP API Reference

### `httplib_get_option( ctx, name );`

### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
|**`ctx`**|`const struct httplib_context *`| A pointer to the webserver context |
|**`name`**|`const char *`| The name of the option to query |

### Return Value

| Type | Description |
| :--- | :--- |
|`const char *`| A pointer to the option value in text, or NULL if an error occured |

### Description

When starting the LibHTTP webserver, options are provided to set the wanted behaviour of the server. The options which were used during startup can be queried through the `httplib_get_option()` function. Options are read-only and cannot be changed while the webserver is running. The function returns a pointer to a text string containing the value of the queried option, or NULL if an error occured. It is guaranteed however that if a valid option name is provided as a parameter to this function, that a pointer to a string is returned and not NULL. In case an option was empty or NULL during initialisation, `httplib_get_option()` will return a pointer to an empty string.

### See Also

* [`httplib_check_feature();`](httplib_check_feature.md)
* [`httplib_start();`](httplib_start.md)
