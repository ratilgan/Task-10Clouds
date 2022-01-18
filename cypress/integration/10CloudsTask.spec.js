/// <reference types="cypress" />

import CareersPage from '../pages/careers_page'

describe('Searching for open QA Engineer roles in 10Clouds', () => {
    beforeEach('navigate to 10Clouds home page and clicks on Careers tab', () => {
        CareersPage.goToHomePage()
        CareersPage.navigateToTab('Careers')            
    })    

    it('validates open "QA Automation Engineer" roles on Careers page of 10Clouds', () => {         
        CareersPage.openJobs()
        .filter(':contains("QA Automation Engineer")')
        .should('have.length', 3)
    })

    it('validates open "QA" roles on Careers page of 10Clouds', () => {         
        CareersPage.allDepartmentsDropdown().click()
        CareersPage.departmentQA().click()     
        
        CareersPage.openJobs().each((element, index, list) => {
        const jobTitle = element.text()
        assert.isTrue(jobTitle.includes('QA Automation Engineer') || jobTitle.includes('QA Engineer'))
        })
    })
})
