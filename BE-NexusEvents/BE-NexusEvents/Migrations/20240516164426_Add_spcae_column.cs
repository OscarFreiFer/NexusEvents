using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BE_NexusEvents.Migrations
{
    /// <inheritdoc />
    public partial class Add_spcae_column : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SpaceType",
                table: "Spaces",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SpaceType",
                table: "Spaces");
        }
    }
}
