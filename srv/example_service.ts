import cds from '@sap/cds'

import {
    getEnvironment,
    People
} from '#cds-models/ExampleService'

const LOG = cds.log('ExampleService')

export default cds.service.impl(async function ExampleService() {

    this.after('READ', People, afterReadPeople)
    this.on(getEnvironment, onGetEnvironment)

    async function afterReadPeople(people: People, req: cds.TypedRequest<People>) {
        LOG.info(people)
    }

    async function onGetEnvironment(req: cds.TypedRequest<typeof getEnvironment.__parameters>): Extract<typeof getEnvironment.__returns, Promise<any>> {
        return "TEST"
    }

    // TODO returns {"@odata.context":"$metadata#Edm.String","value":{"landscape":"TEST"}} which is not a string?
    // async function onGetEnvironment(req: cds.TypedRequest<typeof getEnvironment.__parameters>): Promise<any> {
    //     return {landscape: "TEST"}
    // }
})