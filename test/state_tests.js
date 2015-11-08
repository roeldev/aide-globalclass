var Target = document.documentElement;

// -----------------------------------------------------------------------------

describe('Aide.State()', function aideSateTests()
{
    Target.className = 'foo test1 bar test2--value baz';

    it('should return true when the flag is set', function()
    {
        var $actual = Aide.State('test1');
        expect($actual).to.equal(true);
    });

    it('should return false when the flag is not set', function()
    {
        var $actual = Aide.State('not-set');
        expect($actual).to.equal(false);
    });

    it('should return true when the flag is expected to be not set', function()
    {
        var $actual = Aide.State('not-set', false);
        expect($actual).to.equal(true);
    });

    it('should return true when the flag has the expected value', function()
    {
        var $actual = Aide.State('test2', 'value');
        expect($actual).to.equal(true);
    });
});
