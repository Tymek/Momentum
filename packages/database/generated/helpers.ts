import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type UserInfoKeySpecifier = ('id' | 'username' | UserInfoKeySpecifier)[];
export type UserInfoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_notification' | 'delete_notification_by_pk' | 'delete_page' | 'delete_page_by_pk' | 'delete_session' | 'delete_session_by_pk' | 'delete_speaker' | 'delete_speaker_by_pk' | 'delete_topic' | 'delete_topic_by_pk' | 'delete_user' | 'delete_user_by_pk' | 'insert_notification' | 'insert_notification_one' | 'insert_page' | 'insert_page_one' | 'insert_session' | 'insert_session_one' | 'insert_speaker' | 'insert_speaker_one' | 'insert_topic' | 'insert_topic_one' | 'insert_user' | 'insert_user_one' | 'login' | 'logout' | 'update_notification' | 'update_notification_by_pk' | 'update_page' | 'update_page_by_pk' | 'update_session' | 'update_session_by_pk' | 'update_speaker' | 'update_speaker_by_pk' | 'update_topic' | 'update_topic_by_pk' | 'update_user' | 'update_user_by_pk' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_notification?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_notification_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_page?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_page_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_session?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_session_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_speaker?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_speaker_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_topic?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_topic_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_notification?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_notification_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_page?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_page_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_session?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_session_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_speaker?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_speaker_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_topic?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_topic_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_one?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	update_notification?: FieldPolicy<any> | FieldReadFunction<any>,
	update_notification_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_page?: FieldPolicy<any> | FieldReadFunction<any>,
	update_page_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_session?: FieldPolicy<any> | FieldReadFunction<any>,
	update_session_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_speaker?: FieldPolicy<any> | FieldReadFunction<any>,
	update_speaker_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_topic?: FieldPolicy<any> | FieldReadFunction<any>,
	update_topic_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type notificationKeySpecifier = ('content' | 'created_at' | 'id' | 'isRead' | 'published_at' | 'title' | 'updated_at' | notificationKeySpecifier)[];
export type notificationFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRead?: FieldPolicy<any> | FieldReadFunction<any>,
	published_at?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type notification_aggregateKeySpecifier = ('aggregate' | 'nodes' | notification_aggregateKeySpecifier)[];
export type notification_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type notification_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | notification_aggregate_fieldsKeySpecifier)[];
export type notification_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type notification_max_fieldsKeySpecifier = ('content' | 'created_at' | 'id' | 'published_at' | 'title' | 'updated_at' | notification_max_fieldsKeySpecifier)[];
export type notification_max_fieldsFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	published_at?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type notification_min_fieldsKeySpecifier = ('content' | 'created_at' | 'id' | 'published_at' | 'title' | 'updated_at' | notification_min_fieldsKeySpecifier)[];
export type notification_min_fieldsFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	published_at?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type notification_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | notification_mutation_responseKeySpecifier)[];
export type notification_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type pageKeySpecifier = ('content' | 'created_at' | 'meta' | 'title' | 'updated_at' | pageKeySpecifier)[];
export type pageFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type page_aggregateKeySpecifier = ('aggregate' | 'nodes' | page_aggregateKeySpecifier)[];
export type page_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type page_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | page_aggregate_fieldsKeySpecifier)[];
export type page_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type page_max_fieldsKeySpecifier = ('content' | 'created_at' | 'title' | 'updated_at' | page_max_fieldsKeySpecifier)[];
export type page_max_fieldsFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type page_min_fieldsKeySpecifier = ('content' | 'created_at' | 'title' | 'updated_at' | page_min_fieldsKeySpecifier)[];
export type page_min_fieldsFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type page_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | page_mutation_responseKeySpecifier)[];
export type page_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('isDarkTheme' | 'me' | 'notification' | 'notification_aggregate' | 'notification_by_pk' | 'page' | 'page_aggregate' | 'page_by_pk' | 'session' | 'session_aggregate' | 'session_by_pk' | 'speaker' | 'speaker_aggregate' | 'speaker_by_pk' | 'topic' | 'topic_aggregate' | 'topic_by_pk' | 'user' | 'user_aggregate' | 'user_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	isDarkTheme?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	notification?: FieldPolicy<any> | FieldReadFunction<any>,
	notification_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	notification_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	page_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	page_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	session_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	session_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	topic_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	topic_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sessionKeySpecifier = ('begins_at' | 'created_at' | 'description' | 'ends_at' | 'id' | 'is_main_event' | 'location' | 'name' | 'speaker' | 'speaker_id' | 'topics' | 'topics_aggregate' | 'updated_at' | sessionKeySpecifier)[];
export type sessionFieldPolicy = {
	begins_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	ends_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_main_event?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_id?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	topics_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type session_aggregateKeySpecifier = ('aggregate' | 'nodes' | session_aggregateKeySpecifier)[];
export type session_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type session_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | session_aggregate_fieldsKeySpecifier)[];
export type session_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type session_max_fieldsKeySpecifier = ('begins_at' | 'created_at' | 'description' | 'ends_at' | 'id' | 'location' | 'name' | 'speaker_id' | 'updated_at' | session_max_fieldsKeySpecifier)[];
export type session_max_fieldsFieldPolicy = {
	begins_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	ends_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type session_min_fieldsKeySpecifier = ('begins_at' | 'created_at' | 'description' | 'ends_at' | 'id' | 'location' | 'name' | 'speaker_id' | 'updated_at' | session_min_fieldsKeySpecifier)[];
export type session_min_fieldsFieldPolicy = {
	begins_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	ends_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type session_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | session_mutation_responseKeySpecifier)[];
export type session_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speakerKeySpecifier = ('created_at' | 'description' | 'id' | 'image' | 'name' | 'priority' | 'sessions' | 'sessions_aggregate' | 'topics' | 'topics_aggregate' | 'updated_at' | speakerKeySpecifier)[];
export type speakerFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	topics_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_aggregateKeySpecifier = ('aggregate' | 'nodes' | speaker_aggregateKeySpecifier)[];
export type speaker_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | speaker_aggregate_fieldsKeySpecifier)[];
export type speaker_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_avg_fieldsKeySpecifier = ('priority' | speaker_avg_fieldsKeySpecifier)[];
export type speaker_avg_fieldsFieldPolicy = {
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_max_fieldsKeySpecifier = ('created_at' | 'description' | 'id' | 'image' | 'name' | 'priority' | 'updated_at' | speaker_max_fieldsKeySpecifier)[];
export type speaker_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_min_fieldsKeySpecifier = ('created_at' | 'description' | 'id' | 'image' | 'name' | 'priority' | 'updated_at' | speaker_min_fieldsKeySpecifier)[];
export type speaker_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | speaker_mutation_responseKeySpecifier)[];
export type speaker_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_stddev_fieldsKeySpecifier = ('priority' | speaker_stddev_fieldsKeySpecifier)[];
export type speaker_stddev_fieldsFieldPolicy = {
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_stddev_pop_fieldsKeySpecifier = ('priority' | speaker_stddev_pop_fieldsKeySpecifier)[];
export type speaker_stddev_pop_fieldsFieldPolicy = {
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_stddev_samp_fieldsKeySpecifier = ('priority' | speaker_stddev_samp_fieldsKeySpecifier)[];
export type speaker_stddev_samp_fieldsFieldPolicy = {
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_sum_fieldsKeySpecifier = ('priority' | speaker_sum_fieldsKeySpecifier)[];
export type speaker_sum_fieldsFieldPolicy = {
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_var_pop_fieldsKeySpecifier = ('priority' | speaker_var_pop_fieldsKeySpecifier)[];
export type speaker_var_pop_fieldsFieldPolicy = {
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_var_samp_fieldsKeySpecifier = ('priority' | speaker_var_samp_fieldsKeySpecifier)[];
export type speaker_var_samp_fieldsFieldPolicy = {
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type speaker_variance_fieldsKeySpecifier = ('priority' | speaker_variance_fieldsKeySpecifier)[];
export type speaker_variance_fieldsFieldPolicy = {
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('notification' | 'notification_aggregate' | 'notification_by_pk' | 'page' | 'page_aggregate' | 'page_by_pk' | 'session' | 'session_aggregate' | 'session_by_pk' | 'speaker' | 'speaker_aggregate' | 'speaker_by_pk' | 'topic' | 'topic_aggregate' | 'topic_by_pk' | 'user' | 'user_aggregate' | 'user_by_pk' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	notification?: FieldPolicy<any> | FieldReadFunction<any>,
	notification_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	notification_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	page_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	page_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	session_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	session_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	topic_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	topic_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type topicKeySpecifier = ('created_at' | 'description' | 'id' | 'location' | 'session' | 'session_id' | 'speaker' | 'speaker_id' | 'subject' | 'updated_at' | topicKeySpecifier)[];
export type topicFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	session_id?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_id?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type topic_aggregateKeySpecifier = ('aggregate' | 'nodes' | topic_aggregateKeySpecifier)[];
export type topic_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type topic_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | topic_aggregate_fieldsKeySpecifier)[];
export type topic_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type topic_max_fieldsKeySpecifier = ('created_at' | 'description' | 'id' | 'location' | 'session_id' | 'speaker_id' | 'subject' | 'updated_at' | topic_max_fieldsKeySpecifier)[];
export type topic_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	session_id?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_id?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type topic_min_fieldsKeySpecifier = ('created_at' | 'description' | 'id' | 'location' | 'session_id' | 'speaker_id' | 'subject' | 'updated_at' | topic_min_fieldsKeySpecifier)[];
export type topic_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	session_id?: FieldPolicy<any> | FieldReadFunction<any>,
	speaker_id?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type topic_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | topic_mutation_responseKeySpecifier)[];
export type topic_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type userKeySpecifier = ('created_at' | 'id' | 'password' | 'updated_at' | 'username' | userKeySpecifier)[];
export type userFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_aggregateKeySpecifier = ('aggregate' | 'nodes' | user_aggregateKeySpecifier)[];
export type user_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | user_aggregate_fieldsKeySpecifier)[];
export type user_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_max_fieldsKeySpecifier = ('created_at' | 'id' | 'password' | 'updated_at' | 'username' | user_max_fieldsKeySpecifier)[];
export type user_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_min_fieldsKeySpecifier = ('created_at' | 'id' | 'password' | 'updated_at' | 'username' | user_min_fieldsKeySpecifier)[];
export type user_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | user_mutation_responseKeySpecifier)[];
export type user_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	UserInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserInfoKeySpecifier | (() => undefined | UserInfoKeySpecifier),
		fields?: UserInfoFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	notification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | notificationKeySpecifier | (() => undefined | notificationKeySpecifier),
		fields?: notificationFieldPolicy,
	},
	notification_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | notification_aggregateKeySpecifier | (() => undefined | notification_aggregateKeySpecifier),
		fields?: notification_aggregateFieldPolicy,
	},
	notification_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | notification_aggregate_fieldsKeySpecifier | (() => undefined | notification_aggregate_fieldsKeySpecifier),
		fields?: notification_aggregate_fieldsFieldPolicy,
	},
	notification_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | notification_max_fieldsKeySpecifier | (() => undefined | notification_max_fieldsKeySpecifier),
		fields?: notification_max_fieldsFieldPolicy,
	},
	notification_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | notification_min_fieldsKeySpecifier | (() => undefined | notification_min_fieldsKeySpecifier),
		fields?: notification_min_fieldsFieldPolicy,
	},
	notification_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | notification_mutation_responseKeySpecifier | (() => undefined | notification_mutation_responseKeySpecifier),
		fields?: notification_mutation_responseFieldPolicy,
	},
	page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | pageKeySpecifier | (() => undefined | pageKeySpecifier),
		fields?: pageFieldPolicy,
	},
	page_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | page_aggregateKeySpecifier | (() => undefined | page_aggregateKeySpecifier),
		fields?: page_aggregateFieldPolicy,
	},
	page_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | page_aggregate_fieldsKeySpecifier | (() => undefined | page_aggregate_fieldsKeySpecifier),
		fields?: page_aggregate_fieldsFieldPolicy,
	},
	page_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | page_max_fieldsKeySpecifier | (() => undefined | page_max_fieldsKeySpecifier),
		fields?: page_max_fieldsFieldPolicy,
	},
	page_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | page_min_fieldsKeySpecifier | (() => undefined | page_min_fieldsKeySpecifier),
		fields?: page_min_fieldsFieldPolicy,
	},
	page_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | page_mutation_responseKeySpecifier | (() => undefined | page_mutation_responseKeySpecifier),
		fields?: page_mutation_responseFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	session?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sessionKeySpecifier | (() => undefined | sessionKeySpecifier),
		fields?: sessionFieldPolicy,
	},
	session_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | session_aggregateKeySpecifier | (() => undefined | session_aggregateKeySpecifier),
		fields?: session_aggregateFieldPolicy,
	},
	session_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | session_aggregate_fieldsKeySpecifier | (() => undefined | session_aggregate_fieldsKeySpecifier),
		fields?: session_aggregate_fieldsFieldPolicy,
	},
	session_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | session_max_fieldsKeySpecifier | (() => undefined | session_max_fieldsKeySpecifier),
		fields?: session_max_fieldsFieldPolicy,
	},
	session_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | session_min_fieldsKeySpecifier | (() => undefined | session_min_fieldsKeySpecifier),
		fields?: session_min_fieldsFieldPolicy,
	},
	session_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | session_mutation_responseKeySpecifier | (() => undefined | session_mutation_responseKeySpecifier),
		fields?: session_mutation_responseFieldPolicy,
	},
	speaker?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speakerKeySpecifier | (() => undefined | speakerKeySpecifier),
		fields?: speakerFieldPolicy,
	},
	speaker_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_aggregateKeySpecifier | (() => undefined | speaker_aggregateKeySpecifier),
		fields?: speaker_aggregateFieldPolicy,
	},
	speaker_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_aggregate_fieldsKeySpecifier | (() => undefined | speaker_aggregate_fieldsKeySpecifier),
		fields?: speaker_aggregate_fieldsFieldPolicy,
	},
	speaker_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_avg_fieldsKeySpecifier | (() => undefined | speaker_avg_fieldsKeySpecifier),
		fields?: speaker_avg_fieldsFieldPolicy,
	},
	speaker_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_max_fieldsKeySpecifier | (() => undefined | speaker_max_fieldsKeySpecifier),
		fields?: speaker_max_fieldsFieldPolicy,
	},
	speaker_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_min_fieldsKeySpecifier | (() => undefined | speaker_min_fieldsKeySpecifier),
		fields?: speaker_min_fieldsFieldPolicy,
	},
	speaker_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_mutation_responseKeySpecifier | (() => undefined | speaker_mutation_responseKeySpecifier),
		fields?: speaker_mutation_responseFieldPolicy,
	},
	speaker_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_stddev_fieldsKeySpecifier | (() => undefined | speaker_stddev_fieldsKeySpecifier),
		fields?: speaker_stddev_fieldsFieldPolicy,
	},
	speaker_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_stddev_pop_fieldsKeySpecifier | (() => undefined | speaker_stddev_pop_fieldsKeySpecifier),
		fields?: speaker_stddev_pop_fieldsFieldPolicy,
	},
	speaker_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_stddev_samp_fieldsKeySpecifier | (() => undefined | speaker_stddev_samp_fieldsKeySpecifier),
		fields?: speaker_stddev_samp_fieldsFieldPolicy,
	},
	speaker_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_sum_fieldsKeySpecifier | (() => undefined | speaker_sum_fieldsKeySpecifier),
		fields?: speaker_sum_fieldsFieldPolicy,
	},
	speaker_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_var_pop_fieldsKeySpecifier | (() => undefined | speaker_var_pop_fieldsKeySpecifier),
		fields?: speaker_var_pop_fieldsFieldPolicy,
	},
	speaker_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_var_samp_fieldsKeySpecifier | (() => undefined | speaker_var_samp_fieldsKeySpecifier),
		fields?: speaker_var_samp_fieldsFieldPolicy,
	},
	speaker_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | speaker_variance_fieldsKeySpecifier | (() => undefined | speaker_variance_fieldsKeySpecifier),
		fields?: speaker_variance_fieldsFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	},
	topic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | topicKeySpecifier | (() => undefined | topicKeySpecifier),
		fields?: topicFieldPolicy,
	},
	topic_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | topic_aggregateKeySpecifier | (() => undefined | topic_aggregateKeySpecifier),
		fields?: topic_aggregateFieldPolicy,
	},
	topic_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | topic_aggregate_fieldsKeySpecifier | (() => undefined | topic_aggregate_fieldsKeySpecifier),
		fields?: topic_aggregate_fieldsFieldPolicy,
	},
	topic_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | topic_max_fieldsKeySpecifier | (() => undefined | topic_max_fieldsKeySpecifier),
		fields?: topic_max_fieldsFieldPolicy,
	},
	topic_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | topic_min_fieldsKeySpecifier | (() => undefined | topic_min_fieldsKeySpecifier),
		fields?: topic_min_fieldsFieldPolicy,
	},
	topic_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | topic_mutation_responseKeySpecifier | (() => undefined | topic_mutation_responseKeySpecifier),
		fields?: topic_mutation_responseFieldPolicy,
	},
	user?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | userKeySpecifier | (() => undefined | userKeySpecifier),
		fields?: userFieldPolicy,
	},
	user_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_aggregateKeySpecifier | (() => undefined | user_aggregateKeySpecifier),
		fields?: user_aggregateFieldPolicy,
	},
	user_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_aggregate_fieldsKeySpecifier | (() => undefined | user_aggregate_fieldsKeySpecifier),
		fields?: user_aggregate_fieldsFieldPolicy,
	},
	user_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_max_fieldsKeySpecifier | (() => undefined | user_max_fieldsKeySpecifier),
		fields?: user_max_fieldsFieldPolicy,
	},
	user_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_min_fieldsKeySpecifier | (() => undefined | user_min_fieldsKeySpecifier),
		fields?: user_min_fieldsFieldPolicy,
	},
	user_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_mutation_responseKeySpecifier | (() => undefined | user_mutation_responseKeySpecifier),
		fields?: user_mutation_responseFieldPolicy,
	}
};