#API automation for b21

1. Clone the repo - `git clone https://code.castingnetworks.io/quality-engineering/b21-api-automation.git`
2. cd into b21-api-automation
3. `npm install`
4. Install yarn globally - `npm install -g yarn`

1. You can run predefined scripts in package.json (example: `$env:COUNTRY='COUNTRYNAME'; $env:DBPASS='DBPASS'; yarn testQA test/*/*/*`, this will run all files)
2. Run individual file: `$env:COUNTRY='COUNTRYNAME'; $env:DBPASS='DBPASS'; yarn testQA test/account/accountQueryTest.js`
3. Individual scenario with existing scripts: '`$env:COUNTRY='COUNTRYNAME'; $env:DBPASS='DBPASS'; yarn testQA --grep "CreateAccount - create account successfully" test/*/*`

Note - 
1. As of now possible values for COUNTRY field will be UNITED STATES, AUSTRALIA or UNITED KINGDOM
2. For DBPASS contact to team member

test account credentials: cni-test-automation@castingnetworks.com/Cast@001

API Automation Strategy: https://castingnetworks.atlassian.net/wiki/spaces/QA/pages/47473/API+Automation+Strategy

#### Running tests locally
For running tests locally need to provide database password

#### Comparing GraphQL schemas
GraphQL schemas are comparing before all tests executions to identify issues related to GraphQL schema changes.

In that case, some autotest could be a failure and must be updated according to new changes.

For comparing are used two schemas:
1. `Current Schema` - stored in the file [schema.graphql](graphqlSchemaDiff/schema.graphql);
2. `New Schema` - that are gathering from an endpoint (e.g https://qa-b21.castingnetworks.io/api-gw/graphql) using chai request;

The `Current Schema` can be overwritten using the [overwriteCurrentSchema.js](graphqlSchemaDiff/overwriteCurrentSchema.js) script (e.g `GRAPHQL_URL=https://qa-b21.castingnetworks.io/api-gw/graphql npm run overwriteQraphqlSchema`).

For comparing schemas without test execution use [diffSchemas.js](graphqlSchemaDiff/diffSchemas.js) script (e.g `HOST=https://qa-b21.castingnetworks.io/api-gw/graphql npm run diffQraphqlSchemas`).

#### Check inboxes at mailinator 

Module: [helpers.js](support/helpers.js)

* Get all inboxes for the email 

usage: `await helper.mailinatorGetInbox('test-case-3.fit-for-you-role@mailinator.com')`

response: `[{
               fromfull: 'notifications@castingnetworks.com',
               subject: 'API autotest, UDA/Music / Music / UDA / API autotest, 688afbfc03, Background/Ensemble/Paying/Man/Eastern European',
               channel: 'msg',
               from: 'Casting Networks',
               origfrom: 'Casting Networks <notifications@castingnetworks.com>',
               id: 'test-case-3.fit-for-you-role-1603700656-703059',
               time: 1603700656000,
               seconds_ago: 88 
           }]`
           
* Fetch data from the email 

usage: `await helper.mailinatorFetchEmail('test-case-3.fit-for-you-role-1603700656-703059')`

response: object with keys `[
                             'fromfull',       'headers',
                             'subject',        'ip',
                             'seconds_ago',    'requestId',
                             'parts',          'from',
                             'origfrom',       'to',
                             'id',             'time',
                             'clickablelinks'
                           ]`