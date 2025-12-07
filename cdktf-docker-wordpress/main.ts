import { App, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { DockerProvider } from "./.gen/providers/docker/provider";
import { Container } from "./.gen/providers/docker/container";
import { Image } from "./.gen/providers/docker/image";
import { Network } from "./.gen/providers/docker/network";

class WordPressStack extends TerraformStack {
  constructor(scope: Construct, id: string, port: number) {
    super(scope, id);

    new DockerProvider(this, "docker", {
      context: "desktop-linux",
    });

    const network = new Network(this, "network", {
      name: `wordpress-network-${id}`,
    });

    const mysqlImage = new Image(this, "mysql-image", {
      name: "mysql:8.0",
      keepLocally: false,
    });

    const wordpressImage = new Image(this, "wordpress-image", {
      name: "wordpress:latest",
      keepLocally: false,
    });

    const mysqlContainer = new Container(this, "mysql-container", {
      name: `mysql-${id}`,
      image: mysqlImage.imageId,
      networksAdvanced: [{ name: network.name, aliases: ["mysql"] }],
      env: [
        "MYSQL_ROOT_PASSWORD=rootpass",
        "MYSQL_DATABASE=wordpress",
        "MYSQL_USER=wpuser",
        "MYSQL_PASSWORD=wppass",
      ],
      ports: [{ internal: 3306, external: port + 1000 }],
    });

    new Container(this, "wordpress-container", {
      name: `wordpress-${id}`,
      image: wordpressImage.imageId,
      networksAdvanced: [{ name: network.name }],
      env: [
        "WORDPRESS_DB_HOST=mysql",
        "WORDPRESS_DB_USER=wpuser",
        "WORDPRESS_DB_PASSWORD=wppass",
        "WORDPRESS_DB_NAME=wordpress",
      ],
      ports: [{ internal: 80, external: port }],
      dependsOn: [mysqlContainer],
    });
  }
}

const app = new App();
new WordPressStack(app, "StackOne", 8081);
new WordPressStack(app, "StackTwo", 8082);
app.synth();

