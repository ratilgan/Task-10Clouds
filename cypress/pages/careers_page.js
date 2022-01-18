class CareersPage{

    goToHomePage(){
        cy.visit('https://10clouds.com/')
    }

    navigateToTab(tabName){
        cy.contains(tabName).click()
    }    

    allDepartmentsDropdown(){
        return cy.get('#job-offers__search div div:nth-child(1) button')
    }

    departmentQA(){
        return cy.get('#job-offers__search ul li:nth-child(9)')
    }
    
    openJobs() {
        return cy.get('.job-offer__title')
    }



}

export default new CareersPage()