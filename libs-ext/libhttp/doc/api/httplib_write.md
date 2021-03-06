# LibHTTP API Reference

### `httplib_write( conn, buf, len );`

### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
|**`conn`**|`struct httplib_connection *`| A pointer to the connection to be used to send data |
|**`buf`**|`const void *`| A pointer to the blob of information to be sent |
|**`len`**|`size_t`| The amount of bytes to be sent |

### Return Value

| Type | Description |
| :--- | :--- |
|`int`| An integer indicating the amount of bytes sent, or failure |

### Description

The function `httplib_write()` can be used to send a blob of arbitrary data over a connection. The size of the data is provided as a parameter. The only length limitation on this function is `MAX_INT`, because the return value of this function will turn negative with larger blocks of data, although they may have been sent correctly. The function returns the amount of bytes sent in case of success, the value **0** when the connection has been closed, and **-1** in case of an error.

### See Also

* [`httplib_lock_connection();`](httplib_lock_connection.md)
* [`httplib_printf();`](httplib_printf.md)
* [`httplib_unlock_connection();`](httplib_unlock_connection.md)
* [`httplib_websocket_client_write();`](httplib_websocket_client_write.md)
* [`httplib_websocket_write();`](httplib_websocket_write.md)
