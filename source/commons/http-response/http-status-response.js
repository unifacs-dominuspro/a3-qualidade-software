const httpStatusResponse = async (code, statusMessage, localError) => ({ 
  statusCode: (code || 501), 
  body: (statusMessage || 'Falta parâmetros, revise os dados!'), 
  localization: (localError || 'Não foi encontrado o local do erro.') 
}); 

module.exports = httpStatusResponse;