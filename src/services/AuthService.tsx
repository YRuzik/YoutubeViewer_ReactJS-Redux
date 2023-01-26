import {useHttp} from "../hooks/http.hook";


const AuthService = () => {
    const {request} = useHttp

    const _baseURL = 'https://accounts.google.com/o/oauth2/v2/auth'

    const getUserToken = async () => {
        return (
            await request (
                `${_baseURL}
                scope=https%3A//www.googleapis.com/auth/
                drive.metadata.readonly&include_granted_scopes=true
                &response_type=token
                &state=state_parameter_passthrough_value
                &redirect_uri=http://localhost:3000
                &client_id=client_id`)
        )
    }

}

export default AuthService
