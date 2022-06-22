
import { Utils } from "../../app/Utils/Utils"
import { IncomingMessage } from "http"

describe('Utils Test Suite', ()=> {
    test('testRequestPath Valid Path', ()=>{
        const message = {
            url: 'http://localhost:8080/login'
        } as IncomingMessage;
        const reqPath = Utils.getRequestBasePath(message)
        expect(reqPath).toBe('login')
    })

    test('testRequestPath default', () => {
        const message = {
            url: 'http://localhost:8080/' 
        } as IncomingMessage;
        const reqPath = Utils.getRequestBasePath(message)
        expect(reqPath).toBeFalsy()
    })
    test('testRequestPath null', () => {
        const message = {
            url: 'http://localhost:8080/' 
        } as IncomingMessage;
        const reqPath = Utils.getRequestBasePath(message)
        expect(reqPath).toBeFalsy()
    })
})