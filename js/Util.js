

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
