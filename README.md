Create a small web application which should display data retrieved using API from the National bank of the Republic of
Belarus: https://www.nbrb.by/APIHelp/ExRates.

1.User should be able to open in the browser a web page which displays the chart with rates of selected currency with
respect to Belarusian Ruble for the last week. In the chart the time points (days) should be located on X axis, the rate
value should be on Y axis. Below the chart there should be a dropdown which allows to select the currency to be
displayed in the chart (USD, EUR, RUR).

2.Add a widget to change the time period (start and end date) next to currency dropdown.

3.Add a button/tab to switch the view from chart to table mode. In the table mode user should be able to view the data
for several currencies at a time. Every column represents the data for one currency, the row specifies the specific day.
A new column could be added using '+' button displayed next to the table header. Once pressed user should be able to
select one of 3 currencies mentioned in point 1. It would be nice to have an ability to remove column(s) as well.

4.Nice to have: add a button to export data for selected currency(s) as a csv file. The application should be written
using React, you can also use any other libraries that you think will fit into the task. The results should be presented
as a repository in GitHub.