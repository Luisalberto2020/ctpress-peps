describe('App', () => {
beforeEach(() => {
    cy.visit('http://localhost:8080');
});
it('health test', () => {
  
  cy.contains('h1', 'Flask Starter Code');
}   
);
it('health test about', () => {

  cy.contains('a', 'About').click();
  cy.contains('h1', 'About');
}
);
it('health test show users', () => {
  
    cy.contains('a', 'Show Users').click();
    cy.contains('h1', 'Users');
}
);
it('heath add user', () => {
    cy.contains('a', 'Add User').click();
    cy.contains('h1', 'Add User');

}
);

it('add user', () => {
    cy.contains('a', 'Add User').click();
    cy.contains('h1', 'Add User');
    cy.get('input[name="name"]').type('Luis');
    cy.get('input[name="email"]').type('luis@mail.com');
    cy.get('button[type="submit"]').click();
    cy.contains('li', 'User successfully added');


   
}
);

});