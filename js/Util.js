

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
                $message.append('<textarea id="benchmarkParameters" rows="16" cols="80">benchmark=tpcc\
                \nqueried_sf=1\nthreads=1\nduration=0\nno_stop=true\n\load_database=false\n\
nsm_vol_o_direct=true\nsm_cleaner_interval=0\nsm_cleaner_interval=0\nsm_chkpt_interval=5000\n\
sm_chkpt_interval=5000\nsm_log_delete_old_partitions=false\nsm_vol_log_reads=true\nsm_shutdown_clean=false\n\
sm_bufferpool_swizzle=true\nsm_archiving=false\nsm_truncate_log=false\nsm_no_db=false</textarea>');
                $message.append('</div>');
                $message.append('<br>');

                $message.append($button);

                return $message;
            }
        });
}

function updateParametersBasedOnDialog()
{
    benchmarkParameters = document.getElementById('benchmarkParameters').value;
}
