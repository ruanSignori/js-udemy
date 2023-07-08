export interface CustomerOrderProtocol {
  /**Retorna o nome do Solicitante */
  getName(): string;

  /**Retorna o n° de identificação do solicitante, CPF/CNPJ */
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
