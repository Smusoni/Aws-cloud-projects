# AWS VPC Networking Project

This project demonstrates the creation and configuration of a custom Virtual Private Cloud (VPC) in AWS, featuring public and private subnets, custom route tables, an internet gateway, and EC2 instances. Each key resource is documented with screenshots for clarity.

## Project Architecture Overview

- **VPC:** Custom VPC spanning two availability zones, CIDR block 10.0.0.0/16
- **Subnets:** One public and one private subnet
- **Internet Gateway:** Attached to the VPC for public connectivity
- **Route Tables:** Custom public route table associated to the public subnet
- **EC2 Instances:** One in each subnet, demonstrating access and isolation

## Resource Details

### 1. VPC Details
![VPC Details](images/project-3-vpc.png)
- Shows VPC ID, CIDR, ACLs, DNS settings, and overall state ("Available").

### 2. Public Subnet
![Public Subnet](images/public-subnet.png)
- Subnet ID, CIDR (10.0.1.0/24), availability zone, and route table association with public route table.

### 3. Private Subnet
![Private Subnet](images/private-subnet.png)
- Subnet ID, CIDR (10.0.2.0/24), availability zone, and association with the main route table.

### 4. Internet Gateway
![Internet Gateway Details](images/internet-gateway.png)
- Internet gateway detail attached to the VPC, enabling public access.

### 5. Public Route Table
![Public Route Table](images/public-route-table.png)
- Custom route table associated explicitly to public subnet.

### 6. Subnet Associations
![Subnet Associations](images/subnet-association.png)
- Shows explicit and implicit subnet associations with route tables.

### 7. Private EC2 Instance
![Private EC2 Details](images/private-ec2.png)
- Private EC2 instance (t3.micro) in the private subnet with internal-only IP (10.0.2.226).

### 8. Public EC2 Instance
![Public EC2 Details](images/public-ec2.png)
- Public EC2 instance (t3.micro) in the public subnet with a public IP (3.145.19.15) and private IP (10.0.1.33).

---

## Further Work

- Add configuration scripts (Terraform/CloudFormation) for reproducibility.
- Implement security groups and NACLs for detailed traffic management.
