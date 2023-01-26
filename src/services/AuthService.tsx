import {useHttp} from "../hooks/http.hook";


const AuthService = () => {
    const {request} = useHttp()

    const _baseURL = 'https://accounts.google.com/o/oauth2/v2/auth'
    const _clientID = '827965133282-s079imm6fbb3ohuu8fgvai1aukur174n.apps.googleusercontent.com'

    /*const getUserToken = async () => {
        return (
            await request (
                https://accounts.google.com/o/oauth2/v2/auth?
                scope=https%3A//www.googleapis.com/auth/
                drive.metadata.readonly&include_granted_scopes=true
                &response_type=token
                &state=state_parameter_passthrough_value
                &redirect_uri=http://localhost:3000
                &client_id=${_clientID}`)
        )
    }*/
}

export default AuthService
