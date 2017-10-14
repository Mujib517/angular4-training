import { AboutComponent } from './about.component';


describe("About Compoennt", () => {

    let comp;

    beforeEach(() => {
        comp=new AboutComponent();
    });

    it('should have myVar defined',()=>{
        expect(comp.myVar).toBeDefined();
    });

    it('should have myVar to be set to 10',()=>{
        expect(comp.myVar).toBe(10);
    });

    it('should increment the value of myVar by 10',()=>{
        comp.onClick();

        expect(comp.myVar).toBe(20);

        comp.onClick();
        expect(comp.myVar).toBe(30);
    });
});