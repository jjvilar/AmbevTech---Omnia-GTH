/// <reference types="cypress" />

import { describe, it } from "mocha";

describe('File Upload', () => {
    it('One file', () => {
        const fixtureFile = 'exemplo.pdf';
        const fileInputElement = '#fileInput';

        cy.get(fileInputElement).selectFile(fixtureFile);
    });
});