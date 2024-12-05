using {example.ns as db} from '../db/schema';

service ExampleService {
    entity People as projection on db.People;
    function getEnvironment(query : String, context : array of Context) returns String;

    type Context : {
        role    : String;
        content : String;
    };
}
