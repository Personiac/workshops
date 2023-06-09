
class Television
{
    // Variables
    float powerIO;
    int channelNumber;
    int volumeNumber;

    // Functions
    bool TogglePower(bool powerIO);
    int SetChannel(int channelNumber);
    int AdjustVolume(int volumeNumber);
};



class VendingMachine
{
    // Variables
    int inventory;
    int money;
    int itemNum;

    // Functions
    int checkInventory(int inventory);
    bool grabMoney(int money);
    bool haveItem(int itemNum);
};

class BP_Car
{
    // Variables
    bool HaveGPS;
    float MoveSpeed;
    float FuelAmount;

    // Functions
    bool toggleNav(bool HaveGPS);
    float driveForward(float MoveSpeed);
    float gasConsumption(float FuelAmount);
};