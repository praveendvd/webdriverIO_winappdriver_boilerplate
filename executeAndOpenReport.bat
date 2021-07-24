CALL rmdir /Q /S allure-results
CALL rmdir /Q /S allure-report
CALL npm install
CALL npx wdio run wdio.conf.js
CALL node_modules\allure-commandline\dist\bin\allure generate
CALL node_modules\allure-commandline\dist\bin\allure open