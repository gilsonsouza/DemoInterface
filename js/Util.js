

function generateCountersDialog()
{
    BootstrapDialog.show({
            title: 'Check desired counters',
            message: function(dialogRef){
                var $message = $('<div> ');
                var $button = $('<button class="btn btn-primary btn-lg btn-block">OK</button>');
                $button.on('click', {dialogRef: dialogRef}, function(event){
                    updateExistentCountersBasedOnDialog();
                    event.data.dialogRef.close();
                });
                var i = 0;
                $message.append('<div class=row>')
                $.each(existentCounters, function (key, value){
                    if (value["plot"] == true) {
                        $message.append('<div class="col-xs-4"> <input type="checkbox" id="'+key+'" checked> '+key+'</div>    ');
                    }
                    else {
                        $message.append('<div class="col-xs-4"> <input type="checkbox" id="'+key+'"> '+key+'</div>    ');
                    }
                    i++;
                    if (!(i%3)){
                        $message.append('</div> <div class=row>');
                    }
                });
                $message.append('</div>');

                $message.append($button);

                return $message;
            }
        })
}

function updateExistentCountersBasedOnDialog()
{
    $.each(existentCounters, function (key, value){
        existentCounters[key]["plot"] = document.getElementById(key).checked;
    });
}

function generateParamentersDialog()
{
    BootstrapDialog.show({
            title: 'Parameters',
            message: function(dialogRef){
                var $message = $('<div> ');
                var $button = $('<button class="btn btn-primary btn-lg btn-block">OK</button>');
                $button.on('click', {dialogRef: dialogRef}, function(event){
                    updateParametersBasedOnDialog();
                    event.data.dialogRef.close();
                });
                $message.append('<div class=row>');
                if (noStopOption == true)
                    $message.append('<div class="col-xs-4"> <input type="checkbox" id="nostop" checked> No stop </div>');
                else
                    $message.append('<div class="col-xs-4"> <input type="checkbox" id="nostop"> No stop </div>');

                if (durationOption == true)
                    $message.append('<div class="col-xs-4"> <input type="checkbox" id="duration" checked> Duration <input type="text" id="durationValue" size=4 value='+durationValue+'> </div>');
                else
                    $message.append('<div class="col-xs-4"> <input type="checkbox" id="duration"> Duration <input type="text" id="durationValue" size=4 value='+durationValue+'> </div>');

                if (transactionsOption == true)
                    $message.append('<div class="col-xs-4"> <input type="checkbox" id="transactions" checked> Transactions <input type="text" id="numberTransactions" size=4 value='+numberTransactions+'></div></div> ');
                else
                    $message.append('<div class="col-xs-4"> <input type="checkbox" id="transactions"> Transactions <input type="text" id="numberTransactions" size=4 value='+numberTransactions+'></div></div> ');

                $message.append('</div>');
                $message.append('<div class=row>');

                if (loadOption == true)
                    $message.append('<div class="col-xs-4"> <input type="checkbox" id="load" checked> Load DataBase </div>');
                else
                    $message.append('<div class="col-xs-4"> <input type="checkbox" id="load"> Load DataBase </div>');

                $message.append('<div class="col-xs-8"> Number of Threads <input type="text" id="numberThreads" value='+numberThreads+' size=4> </div>');
                $message.append('</div> ');
                $message.append('</div> <br>');
                $message.append('<br>');

                $message.append($button);

                return $message;
            }
        });
}

function updateParametersBasedOnDialog()
{
    noStopOption = document.getElementById('nostop').checked;
    durationOption = document.getElementById('duration').checked;
    durationValue = document.getElementById('durationValue').value;
    transactionsOption = document.getElementById('transactions').checked;
    numberTransactions = document.getElementById('numberTransactions').value;
    loadOption = document.getElementById('load').checked;
    numberThreads = document.getElementById('numberThreads').value;
}
