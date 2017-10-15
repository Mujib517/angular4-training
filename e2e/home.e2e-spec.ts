import { browser, element, by } from 'protractor';

describe("Home Page", () => {

    //navigate to localhost:42000/
    browser.get('');


    it("should have title angular4training", () => {
        expect(browser.getTitle()).toBe('Angular4Training');
    });

    it('should have home page heading', () => {
        var elem = element(by.css("h2"));
        expect(elem.getText()).toBe("Home Page");
    });

    it('should navigate to about page', () => {
        var aboutLink = element(by.css('a[routerlink="/about"]'));
        aboutLink.click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:49152/about')
    });

    it('should have About Page heading', () => {

        var heading = element(by.css('h1'));

        expect(heading.getText()).toBe('About Page');
    });

    it('should navigate to tasks page', () => {
        var link = element(by.css('a[routerlink="/tasks"]'));

        link.click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:49152/tasks');
    });

    it('should navigate to new task page when i click on new task button', () => {

        var button = element(by.css('.btn.btn-success'));
        button.click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:49152/tasks/new');

        var saveButton = element(by.css('.btn.btn-success.pull-right'));

        expect(saveButton.isEnabled()).toBe(false);
    });

    
    it('should validate name field',()=>{
        var txtName= element(by.css('input[name="name"]'));
        txtName.sendKeys('abc');
        txtName.sendKeys('');
        
        var ddlCat=element(by.css('select[name="category"]'));
        ddlCat.focus();

        var span=element(by.css('.text-danger'));

        expect(span.isDisplayed()).toBeTruthy();
    });

    it('should save new task',()=>{
        var txtName=element(by.css('input[name="name"]'));
        txtName.sendKeys("My New Task from protractor");

        var ddlCat=element(by.css('select[name="category"]'));
        ddlCat.sendKeys("General");

        var saveButton = element(by.css('.btn.btn-success.pull-right'));
        saveButton.click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:49152/tasks');
    });

    it('should navigate to task detail page',()=>{
        var elems= element.all(by.css('.well'));
        var first=elems.get(0);
        first.click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:49152/tasks/1');
    });
});