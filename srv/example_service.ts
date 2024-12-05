import cds from '@sap/cds'

import {
    getEnvironment,
    getEnvironment2,
    People
} from '#cds-models/ExampleService'

const LOG = cds.log('ExampleService')

export default cds.service.impl(async function ExampleService() {

    this.after('READ', People, afterReadPeople)

    // These handlers don't quite care about why types I put on my functions below
    this.on(getEnvironment, onGetEnvironment)
    this.on(getEnvironment2, onGetEnvironment2)

    async function afterReadPeople(people: People, req: cds.TypedRequest<People>) {
        LOG.info(people)
    }

    // how to pass typehints
    async function onGetEnvironment(req: cds.TypedRequest<typeof getEnvironment.__parameters>): Extract<typeof getEnvironment.__returns, Promise<any>> {
        return "TEST"
    }

    // returns {"@odata.context":"$metadata#Edm.String","value":{"landscape":"TEST"}} which is not a string?
    async function onGetEnvironment2(req: cds.Request) {
        return {landscape: "TEST"}
    }
})