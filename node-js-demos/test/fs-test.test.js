var fs = require('fs');
var { expect, should,use } = require('chai');
var { donnable } = require('../src/test-utils');

var chaiAsPromised = require('chai-as-promised');
use(chaiAsPromised);


should();

describe('fs tests', function () {
    const big = './test/big.txt';
    const hello = './test/hello.txt';

    describe('readfile', function () {

        it('should read a file conent synchronously', function () {

            //utf8 encoding ensure that data is converted to redable format
            var data = fs.readFileSync(hello, 'utf8');
            data.should.equal('HELLO WORLD');
        });

        it('should read the cotnent asynchronously using node callback', function (done) {

            fs.readFile(hello, 'utf8', (err, data) => {
                expect(err).to.be.null;
                expect(data).to.equal('HELLO WORLD');
                done();
            });

        });

        it('should fail to read a non-existent file using node callback', function (done) {
            fs.readFile('unknown.txt', 'utf8', (error, data) => {
                expect(data).to.be.undefined;
                expect(error.toString()).to.contain('no such file');
                done();
            })

        });

        it('should read a file using "events" from readFileStream', (done) => {

            var stats = fs.statSync(big);
            var size = 0;
            var readCount = 0;
            var reader = fs.createReadStream(big);

            //reader can emit('data')
            //in small chunks.
            reader.on('data', chunk => {
                size += chunk.length;
                readCount++;
            });

            reader.on('end', () => {
                expect(size).to.be.equal(stats.size);
                console.log('total read count', readCount);
                console.log('total bytes read', size);

                readCount.should.be.greaterThan(1); //it read the whole file in multiple iterations
                done();
            });



        });

        it('should emit "error" event for non-extent file', (done) => {
            var r = fs.createReadStream('unknown.txt')
            r.on('error', donnable(done,error=>{
                expect(error.code).to.equal('ENOENT');                
            }))
            r.on('data',chunk=>{
                
            });
            r.on('end', donnable(done,data=>{
                expect.fail('should not be able to read file');
            }))
            
        })



    });

    describe('readFilePromise', () => {
        var fs = require('fs').promises;

        it('should read the file asynchronously', () => {
            return fs
                .readFile(hello, 'utf8')
                .then(data => data.should.equal('HELLO WORLD'));
        });

        it('should read the file asynchronously using async-await', async () => {
            var data = await fs.readFile(hello, 'utf8');
            data.should.equal('HELLO WORLD');
        })

        it('should be able to read using done', () => {
            return fs.readFile(hello, 'utf8').should.eventually.equal('HELLO WORLD');
        });

        it('should fail when trying to read invalid file', (done)=>{

            fs.readFile('unknown','utf8')
                .should.be
                .rejectedWith('no such file')
                .and.notify(done);
        })
        it('should fail with error code "ENOENT" trying to read invalid file', (done)=>{

            fs.readFile('unknown','utf8')
                .should.be
                .rejected
                .then(error=>{
                    error.code.should.equal('ENOENT');                    
                }).should.eventually.notify(done);
                
        })

    });


});


