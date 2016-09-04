/*
 * This sample shows how to read events from a Amazon Kinesis stream
 * 
 * Credentials:
 *  When using AWS SDK for Node.js the SDK will look for credentials first in the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY and then 
 *  fall back to the shared credentials file. For further information about credentials read the AWS SDK for Node.js documentation
 *  http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Credentials_from_the_Shared_Credentials_File_____aws_credentials_
 * 
 */

// Set the region to the locations of the S3 buckets
process.env['AWS_REGION'] = 'us-west-2'

var fs = require('fs');
var app = require('./app');

var event = JSON.parse(fs.readFileSync('_sampleEvent.json', 'utf8').trim());

var context = {};
context.done = function () {
    console.log("Lambda Function Complete");
}

app.handler(event, context);