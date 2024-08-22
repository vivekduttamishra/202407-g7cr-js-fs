import {expect,should} from 'chai';
import 'mocha'
import { LinkedList } from '../src/list';

should();

describe('Linked List',()=>{

    it('should create a list of number',()=>{

        const list = new LinkedList<number>();
        list.size.should.equal(0);
    })

});