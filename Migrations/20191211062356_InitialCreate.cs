using Microsoft.EntityFrameworkCore.Migrations;

namespace ParcialFinal.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Rutas",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Origen = table.Column<string>(nullable: false),
                    Destino = table.Column<string>(nullable: false),
                    Valor = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rutas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tiquetes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    RutaId = table.Column<string>(nullable: false),
                    ClienteId = table.Column<string>(nullable: true),
                    Cantidad = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tiquetes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tiquetes_Clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Clientes",
                        principalColumn: "Identificacion",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Tiquetes_Rutas_RutaId",
                        column: x => x.RutaId,
                        principalTable: "Rutas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tiquetes_ClienteId",
                table: "Tiquetes",
                column: "ClienteId",
                unique: true,
                filter: "[ClienteId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Tiquetes_RutaId",
                table: "Tiquetes",
                column: "RutaId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tiquetes");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Rutas");
        }
    }
}
