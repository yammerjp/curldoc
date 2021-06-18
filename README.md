# curldoc

curldoc is a simple executable Web API document format using the curl command.

The CLI Application of curldoc behave a HTTP mock server from Web API document.

Document format of curldoc is here.

<code>

A document is markdown file.
You can write anything outside of ``` ... ```

\```curldoc-request
curl http://localhost:3000/hello3 --header 'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
\```

\```curldoc-response
{
    "message": "hello",
    "path": "/json_endpoint"
}
\```


</code>
