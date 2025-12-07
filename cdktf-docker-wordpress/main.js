"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdktf_1 = require("cdktf");
const provider_1 = require("./.gen/providers/docker/provider");
const container_1 = require("./.gen/providers/docker/container");
const image_1 = require("./.gen/providers/docker/image");
const network_1 = require("./.gen/providers/docker/network");
class WordPressStack extends cdktf_1.TerraformStack {
    constructor(scope, id, port) {
        super(scope, id);
        new provider_1.DockerProvider(this, "docker", {
            context: "desktop-linux",
        });
        const network = new network_1.Network(this, "network", {
            name: `wordpress-network-${id}`,
        });
        const mysqlImage = new image_1.Image(this, "mysql-image", {
            name: "mysql:8.0",
            keepLocally: false,
        });
        const wordpressImage = new image_1.Image(this, "wordpress-image", {
            name: "wordpress:latest",
            keepLocally: false,
        });
        const mysqlContainer = new container_1.Container(this, "mysql-container", {
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
        new container_1.Container(this, "wordpress-container", {
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
const app = new cdktf_1.App();
new WordPressStack(app, "StackOne", 8081);
new WordPressStack(app, "StackTwo", 8082);
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBNEM7QUFFNUMsK0RBQWtFO0FBQ2xFLGlFQUE4RDtBQUM5RCx5REFBc0Q7QUFDdEQsNkRBQTBEO0FBRTFELE1BQU0sY0FBZSxTQUFRLHNCQUFjO0lBQ3pDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsSUFBWTtRQUNwRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLElBQUkseUJBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxlQUFlO1NBQ3pCLENBQUMsQ0FBQztRQUVILE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQzNDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxFQUFFO1NBQ2hDLENBQUMsQ0FBQztRQUVILE1BQU0sVUFBVSxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDaEQsSUFBSSxFQUFFLFdBQVc7WUFDakIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxjQUFjLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ3hELElBQUksRUFBRSxrQkFBa0I7WUFDeEIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxjQUFjLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUM1RCxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUU7WUFDbkIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPO1lBQ3pCLGdCQUFnQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzlELEdBQUcsRUFBRTtnQkFDSCw4QkFBOEI7Z0JBQzlCLDBCQUEwQjtnQkFDMUIsbUJBQW1CO2dCQUNuQix1QkFBdUI7YUFDeEI7WUFDRCxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQztTQUNuRCxDQUFDLENBQUM7UUFFSCxJQUFJLHFCQUFTLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ3pDLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRTtZQUN2QixLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU87WUFDN0IsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUMsR0FBRyxFQUFFO2dCQUNILHlCQUF5QjtnQkFDekIsMEJBQTBCO2dCQUMxQiw4QkFBOEI7Z0JBQzlCLDZCQUE2QjthQUM5QjtZQUNELEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDekMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksV0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcCwgVGVycmFmb3JtU3RhY2sgfSBmcm9tIFwiY2RrdGZcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEb2NrZXJQcm92aWRlciB9IGZyb20gXCIuLy5nZW4vcHJvdmlkZXJzL2RvY2tlci9wcm92aWRlclwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vLmdlbi9wcm92aWRlcnMvZG9ja2VyL2NvbnRhaW5lclwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiLi8uZ2VuL3Byb3ZpZGVycy9kb2NrZXIvaW1hZ2VcIjtcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tIFwiLi8uZ2VuL3Byb3ZpZGVycy9kb2NrZXIvbmV0d29ya1wiO1xuXG5jbGFzcyBXb3JkUHJlc3NTdGFjayBleHRlbmRzIFRlcnJhZm9ybVN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcG9ydDogbnVtYmVyKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgIG5ldyBEb2NrZXJQcm92aWRlcih0aGlzLCBcImRvY2tlclwiLCB7XG4gICAgICBjb250ZXh0OiBcImRlc2t0b3AtbGludXhcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ldHdvcmsgPSBuZXcgTmV0d29yayh0aGlzLCBcIm5ldHdvcmtcIiwge1xuICAgICAgbmFtZTogYHdvcmRwcmVzcy1uZXR3b3JrLSR7aWR9YCxcbiAgICB9KTtcblxuICAgIGNvbnN0IG15c3FsSW1hZ2UgPSBuZXcgSW1hZ2UodGhpcywgXCJteXNxbC1pbWFnZVwiLCB7XG4gICAgICBuYW1lOiBcIm15c3FsOjguMFwiLFxuICAgICAga2VlcExvY2FsbHk6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgd29yZHByZXNzSW1hZ2UgPSBuZXcgSW1hZ2UodGhpcywgXCJ3b3JkcHJlc3MtaW1hZ2VcIiwge1xuICAgICAgbmFtZTogXCJ3b3JkcHJlc3M6bGF0ZXN0XCIsXG4gICAgICBrZWVwTG9jYWxseTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBteXNxbENvbnRhaW5lciA9IG5ldyBDb250YWluZXIodGhpcywgXCJteXNxbC1jb250YWluZXJcIiwge1xuICAgICAgbmFtZTogYG15c3FsLSR7aWR9YCxcbiAgICAgIGltYWdlOiBteXNxbEltYWdlLmltYWdlSWQsXG4gICAgICBuZXR3b3Jrc0FkdmFuY2VkOiBbeyBuYW1lOiBuZXR3b3JrLm5hbWUsIGFsaWFzZXM6IFtcIm15c3FsXCJdIH1dLFxuICAgICAgZW52OiBbXG4gICAgICAgIFwiTVlTUUxfUk9PVF9QQVNTV09SRD1yb290cGFzc1wiLFxuICAgICAgICBcIk1ZU1FMX0RBVEFCQVNFPXdvcmRwcmVzc1wiLFxuICAgICAgICBcIk1ZU1FMX1VTRVI9d3B1c2VyXCIsXG4gICAgICAgIFwiTVlTUUxfUEFTU1dPUkQ9d3BwYXNzXCIsXG4gICAgICBdLFxuICAgICAgcG9ydHM6IFt7IGludGVybmFsOiAzMzA2LCBleHRlcm5hbDogcG9ydCArIDEwMDAgfV0sXG4gICAgfSk7XG5cbiAgICBuZXcgQ29udGFpbmVyKHRoaXMsIFwid29yZHByZXNzLWNvbnRhaW5lclwiLCB7XG4gICAgICBuYW1lOiBgd29yZHByZXNzLSR7aWR9YCxcbiAgICAgIGltYWdlOiB3b3JkcHJlc3NJbWFnZS5pbWFnZUlkLFxuICAgICAgbmV0d29ya3NBZHZhbmNlZDogW3sgbmFtZTogbmV0d29yay5uYW1lIH1dLFxuICAgICAgZW52OiBbXG4gICAgICAgIFwiV09SRFBSRVNTX0RCX0hPU1Q9bXlzcWxcIixcbiAgICAgICAgXCJXT1JEUFJFU1NfREJfVVNFUj13cHVzZXJcIixcbiAgICAgICAgXCJXT1JEUFJFU1NfREJfUEFTU1dPUkQ9d3BwYXNzXCIsXG4gICAgICAgIFwiV09SRFBSRVNTX0RCX05BTUU9d29yZHByZXNzXCIsXG4gICAgICBdLFxuICAgICAgcG9ydHM6IFt7IGludGVybmFsOiA4MCwgZXh0ZXJuYWw6IHBvcnQgfV0sXG4gICAgICBkZXBlbmRzT246IFtteXNxbENvbnRhaW5lcl0sXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xubmV3IFdvcmRQcmVzc1N0YWNrKGFwcCwgXCJTdGFja09uZVwiLCA4MDgxKTtcbm5ldyBXb3JkUHJlc3NTdGFjayhhcHAsIFwiU3RhY2tUd29cIiwgODA4Mik7XG5hcHAuc3ludGgoKTtcblxuIl19