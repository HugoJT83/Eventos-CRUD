from services.authService import registerService

def registerController(data):
    res_obj = registerService(data)
    return res_obj