import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import list from "@/app/components/Donation/Donations.json";

const SelectList = () => {
  return (
    <div className="m-5">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable className="max-w-xs mt-2">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="mt-3" color="primary">
          Register
        </Button>
      </div>
    </div>
  );
};

export default SelectList;