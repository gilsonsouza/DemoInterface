var existentCounters = {
"rwlock_r_wait" :{plot: false, secondY: false}
,"rwlock_w_wait" :{plot: false, secondY: false}
, "needs_latch_condl" :  {plot: false, secondY: false}
, "needs_latch_uncondl" :  {plot: false, secondY: false}
, "latch_condl_nowait" :  {plot: false, secondY: false}
, "latch_uncondl_nowait" : {plot: false, secondY: false}
, "bf_one_page_write" : {plot: false, secondY: false}
, "bf_two_page_write" : {plot: false, secondY: false}
, "bf_three_page_write" : {plot: false, secondY: false}
, "bf_four_page_write" : {plot: false, secondY: false}
, "bf_five_page_write" : {plot: false, secondY: false}
, "bf_six_page_write" :  {plot: false, secondY: false}
, "bf_seven_page_write" :  {plot: false, secondY: false}
, "bf_eight_page_write" :  {plot: false, secondY: false}
, "bf_more_page_write" :  {plot: false, secondY: false}
, "cleaned_pages" :  {plot: false, secondY: false}
, "cleaner_time_cpu" :  {plot: false, secondY: false}
, "cleaner_time_io" :  {plot: false, secondY: false}
 , "cleaner_time_copy" :  {plot: false, secondY: false}
 , "bf_already_evicted" :  {plot: false, secondY: false}
 , "bf_eviction_stuck" :  {plot: false, secondY: false}
 , "bf_dirty_page_cleaned" :  {plot: false, secondY: false}
 , "bf_flushed_OHD_page" :  {plot: false, secondY: false}
 , "bf_kick_full" :  {plot: false, secondY: false}
 , "bf_kick_replacement" :  {plot: false, secondY: false}
 , "bf_kick_threshold" :  {plot: false, secondY: false}
 , "bf_sweep_page_hot_skipped" :  {plot: false, secondY: false}
 , "bf_discarded_hot" :  {plot: false, secondY: false}
 , "bf_log_flush_all" :  {plot: false, secondY: false}
 , "bf_log_flush_lsn" :  {plot: false, secondY: false}
 , "bf_write_out" :  {plot: false, secondY: false}
 , "bf_sleep_await_clean" :  {plot: false, secondY: false}
 , "bf_invoked_spr" :  {plot: false, secondY: false}
 , "bf_fg_scan_cnt" :  {plot: false, secondY: false}
 , "bf_unfix_cleaned" :  {plot: false, secondY: false}
 , "bf_evict" :  {plot: false, secondY: false}
 , "rwlock_r_waits" :  {plot: false, secondY: false}
 , "rwlock_w_waits" :  {plot: false, secondY: false}
 , "need_latch_condl" :  {plot: false, secondY: false}
 , "latch_condl_nowaits" :  {plot: false, secondY: false}
 , "need_latch_uncondl" :  {plot: false, secondY: false}
 , "latch_uncondl_nowaits" :  {plot: false, secondY: false}
 , "latch_uncondl_waits" :  {plot: false, secondY: false}
 , "btree_latch_wait" :  {plot: false, secondY: false}
 , "io_latch_wait" :  {plot: false, secondY: false}
 , "bf_look_cnt" :  {plot: false, secondY: false}
 , "bf_grab_latch_failed" :  {plot: false, secondY: false}
 , "bf_hit_cnt" :  {plot: false, secondY: false}
 , "bf_hit_wait" :  {plot: false, secondY: false}
 , "bf_hit_wait_any_p" :  {plot: false, secondY: false}
 , "bf_hit_wait_btree_p" :  {plot: false, secondY: false}
 , "bf_hit_wait_alloc_p" :  {plot: false, secondY: false}
 , "bf_hit_wait_stnode_p" :  {plot: false, secondY: false}
 , "bf_hit_wait_scan" :  {plot: false, secondY: false}
 , "bf_replace_out" :  {plot: false, secondY: false}
 , "bf_replaced_dirty" :  {plot: false, secondY: false}
 , "bf_replaced_clean" :  {plot: false, secondY: false}
 , "bf_replaced_unused" :  {plot: false, secondY: false}
 , "bf_awaited_cleaner" :  {plot: false, secondY: false}
 , "bf_no_transit_bucket" :  {plot: false, secondY: false}
 , "bf_prefetch_requests" :  {plot: false, secondY: false}
 , "bf_prefetches" :  {plot: false, secondY: false}
 , "bf_upgrade_latch_unconditional" :  {plot: false, secondY: false}
 , "bf_upgrade_latch_race" :  {plot: false, secondY: false}
 , "bf_upgrade_latch_changed" :  {plot: false, secondY: false}
 , "restart_repair_rec_lsn" :  {plot: false, secondY: false}
 , "vol_reads" :  {plot: true, secondY: true, name: "Page reads"}
 , "vol_writes" :  {plot: true, secondY: true, name: "Page writes"}
 , "vol_blks_written" :  {plot: false, secondY: false}
 , "need_vol_lock_r" :  {plot: false, secondY: false}
 , "need_vol_lock_w" :  {plot: false, secondY: false}
 , "nowait_vol_lock_r" :  {plot: false, secondY: false}
 , "nowait_vol_lock_w" :  {plot: false, secondY: false}
 , "await_vol_lock_r" :  {plot: false, secondY: false}
 , "await_vol_lock_w" :  {plot: false, secondY: false}
 , "io_m_lsearch" :  {plot: false, secondY: false}
 , "vol_cache_primes" :  {plot: false, secondY: false}
 , "vol_cache_prime_fix" :  {plot: false, secondY: false}
 , "vol_cache_clears" :  {plot: false, secondY: false}
 , "vol_lock_noalloc" :  {plot: false, secondY: false}
 , "log_dup_sync_cnt" :  {plot: false, secondY: false}
 , "log_daemon_wait" :  {plot: false, secondY: false}
 , "log_daemon_work" :  {plot: false, secondY: false}
 , "log_fsync_cnt" : {plot: false, secondY: false}
 , "log_chkpt_cnt" :  {plot: false, secondY: false}
 , "log_chkpt_wake" :  {plot: false, secondY: false}
 , "log_fetches" :{plot: false, secondY: false}
 , "log_inserts" :  {plot: false, secondY: false}
 , "log_full" :  {plot: false, secondY: false}
 , "log_full_old_xct" :  {plot: false, secondY: false}
 , "log_full_old_page" :  {plot: false, secondY: false}
 , "log_full_wait" :  {plot: false, secondY: false}
 , "log_full_force" :  {plot: false, secondY: false}
 , "log_full_giveup" :  {plot: false, secondY: false}
 , "log_file_wrap" :  {plot: false, secondY: false}
 , "log_bytes_generated" : {plot: false, secondY: false}
 , "log_bytes_written" : {plot: false, secondY: false}
 , "log_bytes_rewritten" :  {plot: false, secondY: false}
 , "log_bytes_generated_rb" :  {plot: false, secondY: false}
 , "log_bytes_rbfwd_ratio" :  {plot: false, secondY: false}
 , "log_flush_wait" :  {plot: false, secondY: false}
 , "log_short_flush" :{plot: false, secondY: false}
 , "log_long_flush" :{plot: false, secondY: false}
 , "lock_deadlock_cnt" :  {plot: false, secondY: false}
 , "lock_false_deadlock_cnt" :  {plot: false, secondY: false}
 , "lock_dld_call_cnt" :  {plot: false, secondY: false}
 , "lock_dld_first_call_cnt" :  {plot: false, secondY: false}
 , "lock_dld_false_victim_cnt" :  {plot: false, secondY: false}
 , "lock_dld_victim_self_cnt" :  {plot: false, secondY: false}
 , "lock_dld_victim_other_cnt" :  {plot: false, secondY: false}
 , "nonunique_fingerprints" :  {plot: false, secondY: false}
 , "unique_fingerprints" :  {plot: false, secondY: false}
 , "rec_pin_cnt" :  {plot: false, secondY: false}
 , "rec_unpin_cnt" :  {plot: false, secondY: false}
 , "rec_repin_cvt" :  {plot: false, secondY: false}
 , "bt_find_cnt" :  {plot: false, secondY: false}
 , "bt_insert_cnt" :  {plot: false, secondY: false}
 , "bt_remove_cnt" :  {plot: false, secondY: false}
 , "bt_traverse_cnt" :  {plot: false, secondY: false}
 , "bt_partial_traverse_cnt" :  {plot: false, secondY: false}
 , "bt_restart_traverse_cnt" :  {plot: false, secondY: false}
 , "bt_posc" :  {plot: false, secondY: false}
 , "bt_scan_cnt" :  {plot: false, secondY: false}
 , "bt_splits" :  {plot: false, secondY: false}
 , "bt_cuts" :  {plot: false, secondY: false}
 , "bt_grows" :  {plot: false, secondY: false}
 , "bt_shrinks" :  {plot: false, secondY: false}
 , "bt_links" :  {plot: false, secondY: false}
 , "bt_upgrade_fail_retry" :  {plot: false, secondY: false}
 , "bt_clr_smo_traverse" :  {plot: false, secondY: false}
 , "bt_pcompress" :  {plot: false, secondY: false}
 , "bt_plmax" :  {plot: false, secondY: false}
 , "any_p_fix_cnt" :  {plot: false, secondY: false}
 , "alloc_p_fix_cnt" :  {plot: false, secondY: false}
 , "stnode_p_fix_cnt" :  {plot: false, secondY: false}
 , "page_fix_cnt" :  {plot: false, secondY: false}
 , "bf_fix_cnt" :  {plot: false, secondY: false}
 , "bf_refix_cnt" :  {plot: false, secondY: false}
 , "bf_unfix_cnt" :  {plot: false, secondY: false}
 , "vol_check_owner_fix" :  {plot: false, secondY: false}
 , "page_alloc_cnt" :  {plot: false, secondY: false}
 , "page_dealloc_cnt" :  {plot: false, secondY: false}
 , "ext_lookup_hits" :  {plot: false, secondY: false}
 , "ext_lookup_misses" :  {plot: false, secondY: false}
 , "alloc_page_in_ext" :  {plot: false, secondY: false}
 , "vol_free_page" :  {plot: false, secondY: false}
 , "vol_next_page" :  {plot: false, secondY: false}
 , "vol_find_free_exts" :  {plot: false, secondY: false}
 , "xct_log_flush" : {plot: false, secondY: false}
 , "begin_xct_cnt" : {plot: false, secondY: false, name: "Txn. begin rate"}
 , "commit_xct_cnt" : {plot: true, secondY: false, name: "Txn. commit rate"}
 , "abort_xct_cnt" : {plot: false, secondY: false}
 , "log_warn_abort_cnt" :  {plot: false, secondY: false}
 , "prepare_xct_cnt" :  {plot: false, secondY: false}
 , "rollback_savept_cnt" :  {plot: false, secondY: false}
 , "internal_rollback_cnt" :  {plot: false, secondY: false}
 , "s_prepared" :  {plot: false, secondY: false}
 , "sdesc_cache_miss" :  {plot: false, secondY: false}
 , "mpl_attach_cnt" :  {plot: false, secondY: false}
 , "anchors" :  {plot: false, secondY: false}
 , "compensate_in_log" :  {plot: false, secondY: false}
 , "compensate_in_xct" :  {plot: false, secondY: false}
 , "compensate_records" :  {plot: false, secondY: false}
 , "compensate_skipped" :  {plot: false, secondY: false}
 , "log_switches" :  {plot: false, secondY: false}
 , "get_logbuf" :  {plot: false, secondY: false}
 , "await_1thread_xct" :  {plot: false, secondY: false}
 , "lock_query_cnt" :  {plot: false, secondY: false}
 , "unlock_request_cnt" :  {plot: false, secondY: false}
 , "lock_request_cnt" :  {plot: false, secondY: false}
 , "lock_acquire_cnt" :  {plot: false, secondY: false}
 , "lock_head_t_cnt" :  {plot: false, secondY: false}
 , "lock_await_alt_cnt" :  {plot: false, secondY: false}
 , "lock_extraneous_req_cnt" :  {plot: false, secondY: false}
 , "lock_conversion_cnt" :  {plot: false, secondY: false}
 , "lk_vol_acq" :  {plot: false, secondY: false}
 , "lk_store_acq" :  {plot: false, secondY: false}
 , "lk_key_acq" :  {plot: false, secondY: false}
 , "lock_wait_cnt" :  {plot: false, secondY: false}
 , "lock_block_cnt" :  {plot: false, secondY: false}
 , "lk_vol_wait" :  {plot: false, secondY: false}
 , "lk_store_wait" :  {plot: false, secondY: false}
 , "lk_key_wait" :  {plot: false, secondY: false}
 , "bf_fix_nonroot_count" : {plot: false, secondY: false}
 , "bf_fix_nonroot_swizzled_count" :  {plot: false, secondY: false}
 , "bf_fix_nonroot_miss_count" :  {plot: false, secondY: false}
 , "bf_fix_adjusted_parent" :  {plot: false, secondY: false}
 , "bf_batch_wait_time" :  {plot: false, secondY: false}
 , "restart_log_analysis_time" :  {plot: false, secondY: false}
 , "restart_redo_time" :  {plot: false, secondY: false}
 , "restore_sched_seq" :  {plot: false, secondY: false}
 , "restore_sched_queued" :  {plot: false, secondY: false}
 , "restore_sched_random" :  {plot: false, secondY: false}
 , "restore_time_read" :  {plot: false, secondY: false}
 , "restore_time_replay" :  {plot: false, secondY: false}
 , "restore_time_openscan" :  {plot: false, secondY: false}
 , "restore_time_write" :  {plot: false, secondY: false}
 , "restore_skipped_segs" :  {plot: false, secondY: false}
 , "restore_backup_reads" :  {plot: false, secondY: false}
 , "restore_async_write_time" :  {plot: false, secondY: false}
 , "restore_log_volume" :  {plot: false, secondY: false}
 , "restore_multiple_segments" :  {plot: false, secondY: false}
 , "restore_segment_count" :  {plot: false, secondY: false}
 , "restore_invocations" :  {plot: false, secondY: false}
 , "restore_preempt_queue" :  {plot: false, secondY: false}
 , "restore_preempt_bitmap" :  {plot: false, secondY: false}
 , "la_log_slow" :  {plot: false, secondY: false}
 , "la_activations" : {plot: false, secondY: false}
 , "la_read_volume" :  {plot: false, secondY: false}
 , "la_read_count" :  {plot: false, secondY: false}
 , "la_open_count" :  {plot: false, secondY: false}
 , "la_read_time" :  {plot: false, secondY: false}
 , "la_block_writes" :  {plot: false, secondY: false}
 , "la_merge_heap_time" :  {plot: false, secondY: false}
 , "la_index_probes" :  {plot: false, secondY: false}
 , "la_img_compressed_bytes" :  {plot: false, secondY: false}
 , "log_img_format_bytes" :  {plot: false, secondY: false}
 , "la_skipped_bytes" :  {plot: false, secondY: false}
 , "backup_not_prefetched" :  {plot: false, secondY: false}
 , "backup_evict_segment" : {plot: false, secondY: false}
};
