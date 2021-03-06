#Documentation


###Use VS 2015 for Github and TFS
https://www.visualstudio.com/docs/git/gitquickstart

###Store music files in AWS S3 and metadata for the files in AWS SimpleDB
https://aws.amazon.com/simpledb/


###Web Services For Music Information

List of 25 Music Api's
http://www.programmableweb.com/news/25-music-apis/2008/02/21

GRACENOTE
Has recognition technology in addition to text-based search api's.
https://developer.gracenote.com/plans

LastFM
http://www.last.fm/api

MusicBrainz
http://musicbrainz.org/doc/Development/JSON_Web_Service

freeDB
Not actually a web service yet. 
http://www.freedb.org/


###Amazon Web Services

AWS Serverless Platform
I can build this app completely with AWS services completely free.
Most of the services I need are "pay as you go" and have very generous free tier limits that
do not expire after 12 months.  Here is a list of the services I would use:
--AWS Lambda - serverless functions: https://aws.amazon.com/lambda
--Amazon API Gateway - create and expose api's: https://aws.amazon.com/api-gateway
--AWS IAM - Identity Mgmt: https://aws.amazon.com/iam/details/
--AWS Cognito - User sign in, data synch: https://aws.amazon.com/cognito/
--DynamoDB - NoSQL database: https://aws.amazon.com/dynamodb
--SimpleDB - NoSQL database, often used in conjuction with S3: https://aws.amazon.com/simpledb/

Here is an article from Auth0 that describes building a serverless app using the above and then also
how to use their product for authentication: https://auth0.com/blog/building-serverless-apps-with-aws-lambda/

Node.js and DynamoDB
http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.html


###AWS Lambda 

AWS Labs Examples
http://www.allthingsdistributed.com/2016/06/aws-lambda-serverless-reference-architectures.html

Good case study for server-less app architecture
http://highscalability.com/blog/2015/12/7/the-serverless-start-up-down-with-servers.html

...with Visual Studio
https://blogs.aws.amazon.com/net/post/Tx381XNNQALP8BA/AWS-Lambda-Support-in-Visual-Studio


###Build Process

Task Runners
In the JS side of things, I can use task runners to configure and run Brunch, Webpack, Gulp, NPM task.
https://blogs.msdn.microsoft.com/webdev/2016/01/06/task-runners-in-visual-studio-2015/


###Brunch
A alternative to Webpack, claims to be simpler and faster.
http://brunch.io/
Here's a task runner for VS: https://visualstudiogallery.msdn.microsoft.com/de706ad0-8a73-4df3-bef5-867bb9a70d51

###NPM vs. Bower
--NPM has nested dependencies.
This makes it more stable for packages that require different versions of the same dependencies.
--Bower has a flat dependency tree which means it only has one version of each package.
This makes the front end packages load faster.
--NPM can be used with Browserify or NPM dedupe to help with the nesting issue.
--NPM 3 handles dependencies in a more flat way now.
https://docs.npmjs.com/how-npm-works/npm3-dupe
It's not perfect, so I probably should use Browserify with it.

###Browserify

Use with NPM to package dependencies for the browser so that they can be required.
http://browserify.org/


###ES6 Babel and Babelify

Instead of using CommonJS exports that Node.js and Browserify uses, I could code in the ES6
modules format and use Babel to transpile it to CommonJS format.  For the browser, I would
use Babelify instead of Browserify to keep using the ES6 format.
https://github.com/babel/babelify
https://babeljs.io/

###React
Creating React Apps with no configuration
https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html

###React and TypeScript

This is a good project template:
https://github.com/rangle/typescript-react-redux-starter

This blog post explains the setup involved with React, TypeScript, and Webpack:
http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/#recommendation

###Automatically Deploy
Travis CI enables environment variables which can be used to store api keys for AWS S3 and used to deploy there.

http://cloudcannon.com/tutorial/2016/01/21/deploy-jekyll-sites-to-s3-using-travis-ci/

https://docs.travis-ci.com/user/deployment/lambda


https://travis-ci.org/geowittejr/Audeeo/settings

http://bytes.babbel.com/en/articles/2016-05-20-deploy-lambda-functions-using-travis.html

