namespace example.ns;

using {cuid} from '@sap/cds/common';

@singular: 'Person'
@plural  : 'People'
entity People : cuid {
    name : String;
}
