//header: type of request(get(request a body or header, asking for a response of a request),put(modify a req),post(create a req),delete(delete a req) etc)
//body : contains content, what type of content it contains(type it contains: json,photo,har cheez response jo bhi ayega request sai vo body mai ayega)

//library express
//library morgan (helps in log, all the log files, from your server)
//3 line initialized express
//5 line a variable named port, and env var sai port karwado agr na milay to 3000 per karwado, enviroment variable secret hota hai

//9 line user named empty array
//10 express.json ( body agr json mai hai to response json mai hi ata hai )
//normal api: api is made for machines, gui(graphical user interface) is made for user
//rest_api : api's of webserver, there are many standards of writing an api, rest api is a standard of writing.
//url mai hamesha small letter hota hai.
//middlewares: .use, when we request it, it will get through pipeline and hit from top to bottom, as a middleman-------------------
//.get middleware, should have get, and address should be started with /
//req: object of request(header,body etc), res: responsse handler , next: allows request to be forwarded to next middleware 
//11 morgan('short') will give us info about req by logging it out



