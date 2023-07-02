uint256 public totalSupply;
    mapping(address => uint256) public balances;
    
    constructor() {
        name = "TokenTest";
        symbol = "TT";
        totalSupply = 5000000;
        balances[msg.sender] = totalSupply;
    }
    
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value, "Insufficient balance");
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
  
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
}
